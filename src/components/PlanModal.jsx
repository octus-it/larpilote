import Modal from './ui/Modal'
import ContactForm from './ContactForm'

export default function PlanModal({ plan, onClose }) {
  const isSimplePrice = plan ? /^[0-9][0-9\s]*$/.test(plan.price) : false

  return (
    <Modal open={!!plan} onClose={onClose} labelledBy="plan-modal-title">
      {plan && (
        <div className="p-7 sm:p-9 max-h-[85vh] overflow-y-auto">
          <p className="kicker mb-2 text-gold-dark">Nos forfaits</p>
          <h2 id="plan-modal-title" className="font-display text-2xl md:text-3xl">
            {plan.name}
          </h2>
          <p className="mt-1.5 text-sm opacity-60">
            {plan.price}
            {isSimplePrice ? ` ${plan.unit}` : ` — ${plan.unit}`}
          </p>

          <div className="mt-7">
            <ContactForm
              plan={plan}
              initialProfile={plan.audience === 'conciergerie' ? 'Conciergerie' : 'Propriétaire'}
            />
          </div>
        </div>
      )}
    </Modal>
  )
}
