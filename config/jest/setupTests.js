import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl, shallowWithIntl } from '../../tests/utils/intl-enzyme-test-helper';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.mountWithIntl = mountWithIntl;
global.shallowWithIntl = shallowWithIntl;


Enzyme.configure({ adapter: new Adapter() });
