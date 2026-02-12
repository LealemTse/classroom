import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import {BrowserRouter, Outlet, Route, Routes} from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider } from "./providers/data";
import Dashboard from "@/pages/dashboard.tsx";
import {BookOpen, Home} from "lucide-react";
import {Layout} from "./components/refine-ui/layout/layout.tsx";
import SubjectsList from "@/pages/subjects/list.tsx";
import SubjectsCreate from "@/pages/subjects/create.tsx";
function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "tTheeT-Wh9WCp-TR2QMn",
              }}
              //this section will make a resource like the icon, label and path in the sidebar created
            resources={[
                {
                    name: 'dashboard',
                    list: '/',
                    meta: { label: 'Home', icon: <Home/>}
                },
                {
                    name: 'subjects',
                    list: '/subjects',
                    create: '/subjects/create',
                    meta: {label: 'Subjects', icon: <BookOpen/>}
                }
            ]}
            >
              <Routes>
                  //the Layout and Outlet paths will create a sidebar as the layout is imported form components/refine-ui/layout/layout.tsx
                  <Route element={
                      <Layout>
                          <Outlet />
                      </Layout>
                  }>
                      <Route path="/" element={ <Dashboard />}/>
                      <Route path="Subjects">
                          <Route index element={<SubjectsList/>}/>
                          <Route path="create" element={<SubjectsCreate/>}/>
                      </Route>
                  </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
