import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from '../components/details/Details';
Enzyme.configure({ adapter: new Adapter() })

test('Details component recieves the params successfully', () => {
  const match = { params: { id: 511728 } }
  const component = shallow(<Details match={match} />)
  expect(component).toMatchSnapshot();
});