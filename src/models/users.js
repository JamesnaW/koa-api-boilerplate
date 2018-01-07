import config from '../../config'

export async function Users(ctx){
  let rows = ctx.myPool().query(`select * from users`)
  return rows
}
export async function User(ctx, userId){
  let rows = ctx.myPool().query(`select * from users where ID=?`, [userId])
  return rows
}
