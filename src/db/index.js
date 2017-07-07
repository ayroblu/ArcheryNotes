// Define your models and their properties
import { Settings } from './models'
import Realm from 'realm'

// Upon logout, remove user row, upon signup add user row
export function getRealm(){
  const realm = new Realm({
    schema: [Settings]
  , schemaVersion: 0
  })
  return realm
}
export function firstTimeCheck(){
  const realm = getRealm()
  if (realm.objects('Settings').length > 0){
    return
  }
  realm.write(()=>{
    realm.create('Settings', {})
  })
}
export function getSettings(){
  const realm = getRealm()
  return realm.objects('Settings')[0]
}
export function updateSettings(newSettings){
  if (!newSettings) return
  const realm = getRealm()
  const settings = getSettings()
  realm.write(()=>{
    Object.assign(settings, newSettings)
  })
}

export function cleanDb(){
  const realm = getRealm()
  realm.write(()=>{
    realm.deleteAll()
  })
}

