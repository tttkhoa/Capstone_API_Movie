import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { MovieModule } from './movie/movie.module';
import { CinemaModule } from './cinema/cinema.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, TicketModule, MovieModule, CinemaModule,
  ConfigModule.forRoot({isGlobal:true}),
  JwtModule.register({global:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
