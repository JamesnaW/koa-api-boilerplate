import {Users, User} from '../../models/users'

export async function getUsers (ctx) {
  const users = await Users(ctx)
  ctx.body = { users }
}

export async function getUser (ctx, next) {
  try {
    const user = await User(ctx, ctx.params.id)
    if (!user) {
      ctx.throw(404)
    }

    ctx.body = {
      user
    }
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404)
    }

    ctx.throw(500)
  }

  if (next) { return next() }
}
