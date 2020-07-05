import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repository/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repository/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repository/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
