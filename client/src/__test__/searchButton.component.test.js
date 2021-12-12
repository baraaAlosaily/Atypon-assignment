import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchButton from '../components/searchButton/SearchButton';
Enzyme.configure({ adapter: new Adapter() })

test('Search button works successfully', () => {
  const mockCallBack = jest.fn();
  const component = shallow(<SearchButton onClick={mockCallBack} />)
  component.find('button').simulate('click')

  expect(mockCallBack.mock.calls.length).toEqual(1);
});