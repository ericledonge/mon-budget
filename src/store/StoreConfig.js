import basicInfo from './modules/BasicInfo.module';
import revenues from './modules/Revenues.module';
import workflow from './modules/Workflow.module';
import expenses from './modules/Expenses.module';

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    basicInfo,
    revenues,
    expenses,
    workflow
  }
};
