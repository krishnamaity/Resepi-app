
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx';
import { MealProvider } from './context/mealsContext.tsx';
createRoot(document.getElementById('root')!).render(
 <SidebarProvider>
  <MealProvider>
  <App/>
  </MealProvider>
  
 </SidebarProvider>
)
