import basicInfo from './modules/BasicInfo.module';
import revenues from './modules/Revenues.module';

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    basicInfo,
    revenues
  }
};
