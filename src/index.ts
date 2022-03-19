import { ClockController } from './controllers/ClockController';
import './index.css';
import { ClockModel } from './models/clock.model';
import { ClockView } from './views/clock.view';


let app = new ClockController( new ClockModel(), new ClockView());
app.startTime();
