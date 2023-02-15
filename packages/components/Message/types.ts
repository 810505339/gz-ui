export interface MessageOptions {
  type?: MessageType
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  showIcon?: boolean
  onClose?: () => void
  onLeave?: () => void
  onAfterLeave?: () => void
}

export type MessageType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'loading'
  | 'default'

