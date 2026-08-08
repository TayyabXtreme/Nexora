import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
 
export const appRouter = createTRPCRouter({

  health:baseProcedure.query(async()=>{
    throw new Error("Somethings went wrong")
    return {status:'ok',code:200}
  })
});
 
// export type definition of API
export type AppRouter = typeof appRouter;