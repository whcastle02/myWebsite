// composables/useToast.js
import { reactive, readonly } from 'vue'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000 // Adjust if needed

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const state = reactive({
  toasts: []
})

const toastTimeouts = new Map()

function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) return

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    removeToast(toastId)
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

function addToast({ title, description, action }) {
  const id = genId()
  const newToast = {
    id,
    title,
    description,
    action,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismissToast(id)
    }
  }

  state.toasts.unshift(newToast)
  state.toasts.splice(TOAST_LIMIT) // Keep max TOAST_LIMIT
  return { id, dismiss: () => dismissToast(id), update: (t) => updateToast(id, t) }
}

function updateToast(id, updatedProps) {
  const toast = state.toasts.find((t) => t.id === id)
  if (toast) Object.assign(toast, updatedProps)
}

function dismissToast(toastId) {
  const targetToasts = toastId ? [toastId] : state.toasts.map((t) => t.id)
  targetToasts.forEach((id) => {
    const toast = state.toasts.find((t) => t.id === id)
    if (toast) toast.open = false
    addToRemoveQueue(id)
  })
}

function removeToast(toastId) {
  const index = state.toasts.findIndex((t) => t.id === toastId)
  if (index !== -1) state.toasts.splice(index, 1)
}

export function useToast() {
  return {
    toasts: readonly(state.toasts),
    toast: addToast,
    dismiss: dismissToast
  }
}
