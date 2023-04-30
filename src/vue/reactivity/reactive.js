import { isObject } from "../shared/utils"
import { mutableHandler } from "./mutableHandler"

export function reactive(target) {
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, beseHandler) {
  if (!isObject(target)) {
    return target
  }
  const observer = new Proxy(target, beseHandler)
  return observer
}