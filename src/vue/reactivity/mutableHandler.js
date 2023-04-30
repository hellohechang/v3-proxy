import { hasOwnProperty, isEqual, isObject } from "../shared/utils"
import { reactive } from "./reactive"

const get = createGetter()
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)

    if (isObject(res)) {
      return reactive(res)
    }

    return res
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key)
    const oldValue = target[key]
    const res = Reflect.set(target, key, value, receiver)

    if (!isKeyExist) {
      console.log('新增')
    } else if (!isEqual(value, oldValue)) {
      console.log('修改')
    }

    return res
  }
}


export const mutableHandler = {
  get, set
}