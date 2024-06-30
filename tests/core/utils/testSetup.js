import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

/* eslint-disable */
global.navigator.clipboard = {
  writeText: jest.fn(),
  readText: jest.fn(),
  read: undefined,
  write: undefined,
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeEventListener: jest.fn(),
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

/* eslint-disable */
configure({ adapter: new Adapter() });
