
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
  
test('failed', async () => {
    const routes = [
      {
        path: '/',
        element: <div />,
        loader: () => ({ name: 'test event' }), // if comment this line the test is passed
      },
    ];
  
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
  
    render(<RouterProvider router={router} />);
  
    expect(1).toBe(1);
});
