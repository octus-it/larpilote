import { useEffect, useRef, useState } from 'react'

const SDK_SRC = 'https://www.paypal.com/sdk/js?client-id=BAAlH0jlWBQ4uvNM36oqgd5hHcgSzpjW1NRFJPT36nCAi2ap6OyAiIcqusRhz3-qKrBsniJRbaDXbZFtRg&vault=true&intent=subscription'

function loadPaypalSdk() {
  if (window.paypal) return Promise.resolve(window.paypal)

  const existing = document.querySelector(`script[src="${SDK_SRC}"]`)
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(window.paypal))
      existing.addEventListener('error', reject)
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SDK_SRC
    script.dataset.sdkIntegrationSource = 'button-factory'
    script.onload = () => resolve(window.paypal)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export default function PayPalButton({ planId, onApprove, createSubscription, onClick }) {
  const containerRef = useRef(null)
  const buttonsRef = useRef(null)
  const onApproveRef = useRef(onApprove)
  onApproveRef.current = onApprove
  const createSubscriptionRef = useRef(createSubscription)
  createSubscriptionRef.current = createSubscription
  const onClickRef = useRef(onClick)
  onClickRef.current = onClick
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    setFailed(false)

    loadPaypalSdk()
      .then((paypal) => {
        if (cancelled || !containerRef.current) return
        buttonsRef.current = paypal.Buttons({
          style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'subscribe' },
          // Validation belongs here, not in createSubscription: onClick can cleanly
          // cancel the flow with actions.reject() before the popup opens, whereas
          // rejecting createSubscription's promise surfaces as an uncaught error
          // in PayPal's own SDK console output.
          onClick: (data, actions) =>
            onClickRef.current ? onClickRef.current(data, actions) : actions.resolve(),
          createSubscription: (data, actions) =>
            createSubscriptionRef.current
              ? createSubscriptionRef.current(data, actions)
              : actions.subscription.create({ plan_id: planId }),
          onApprove: (data) => onApproveRef.current(data.subscriptionID),
        })
        buttonsRef.current.render(containerRef.current)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      buttonsRef.current?.close?.()
    }
  }, [planId])

  if (failed) {
    return (
      <p className="text-sm opacity-70">
        Le module de paiement n’a pas pu se charger. Vérifiez votre connexion ou réessayez dans
        un instant.
      </p>
    )
  }

  return <div ref={containerRef} id={`paypal-button-container-${planId}`} />
}
