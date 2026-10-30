import Modal from './ui/Modal'
import RequestForm from './RequestForm'
import { formatPlanPrice } from '../data'
import { useTr } from '../i18n/index.jsx'

export default function PlanModal({ plan, onClose }) {
  const tr = useTr()
  return (
    <Modal open={!!plan} onClose={onClose} labelledBy="plan-modal-title">
      {plan && (
        <div className="p-6 sm:p-9 max-h-[85vh] overflow-y-auto">
          <p className="kicker mb-2 text-gold-dark">{plan.form === 'audit' ? tr('Audit') : tr('Nos forfaits')}</p>
          <h2 id="plan-modal-title" className="font-display text-2xl md:text-3xl pr-8">
            {plan.form === 'audit' ? tr('Demande d’audit') : `${tr('Formule')} ${plan.name}`}
          </h2>
          <p className="mt-1.5 text-sm opacity-60">{formatPlanPrice(plan)}</p>

          <div className="mt-7">
            <RequestForm type={plan.form} />
          </div>
        </div>
      )}
    </Modal>
  )
}
