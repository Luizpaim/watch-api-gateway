import { Module } from '@nestjs/common'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'
import { UsersModule } from './users/infrastructure/users.module'
import { DatabaseModule } from './shared/infrastructure/database/database.module'
import { AuthModule } from './auth/infrastructure/auth.module'
import { WebsocketModule } from './shared/infrastructure/websocket/websocket.module'
import { RedisCacheModule } from './shared/infrastructure/redis-cache/redis-cache.module'

@Module({
  imports: [
    EnvConfigModule,
    UsersModule,
    DatabaseModule,
    AuthModule,
    WebsocketModule,
    RedisCacheModule,
  ],
})
export class AppModule {}
