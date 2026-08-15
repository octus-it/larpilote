import { useState } from 'react'
import Modal from './ui/Modal'
import ContactForm from './ContactForm'
import PayPalButton from './PayPalButton'

function PlanModalBody({ plan }) {
  const isSimplePrice = /^[0-9][0-9\s]*$/.test(plan.price)
  const [paid, setPaid] = useState(false)
  const requiresPayment = Boolean(plan.paypalPlanId) && !paid

  return (
    <div className="p-7 sm:p-9 max-h-[85vh] overflow-y-auto">
      <p className="kicker mb-2 text-gold-dark">Nos forfaits</p>
      <h2 id="plan-modal-title" className="font-display text-2xl md:text-3xl">
        {plan.name}
      </h2>
      <p className="mt-1.5 text-sm opacity-60">
        {plan.price}
        {isSimplePrice ? ` ${plan.unit}` : ` — ${plan.unit}`}
      </p>

      {requiresPayment ? (
        <div className="mt-7">
          <p className="text-sm border border-gold/40 text-gold-dark px-4 py-3 leading-relaxed">
            L’abonnement se règle avant l’envoi de votre demande. Une fois le paiement confirmé,
            le formulaire s’affiche pour nous transmettre vos coordonnées.
          </p>
          <div className="mt-6">
            <PayPalButton planId={plan.paypalPlanId} onApprove={() => setPaid(true)} />
          </div>
        </div>
      ) : (
        <div className="mt-7">
          {plan.paypalPlanId && (
            <p className="mb-6 text-sm border border-gold/40 text-gold-dark px-4 py-3">
              Paiement confirmé. Complétez vos coordonnées ci-dessous.
            </p>
          )}
          <ContactForm
            plan={plan}
            initialProfile={plan.audience === 'conciergerie' ? 'Conciergerie' : 'Propriétaire'}
          />
        </div>
      )}
    </div>
  )
}

export default function PlanModal({ plan, onClose }) {
  return (
    <Modal open={!!plan} onClose={onClose} labelledBy="plan-modal-title">
      {plan && <PlanModalBody key={plan.slug} plan={plan} />}
    </Modal>
  )
}
