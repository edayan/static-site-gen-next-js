import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
 
// you would have to import / invoke this in another file
export async function openDB () {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  })
}