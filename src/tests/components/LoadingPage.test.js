import { shallow } from 'enzyme'
import React from 'react'
import LoadingPage from '../../components/LoadingPage'

let startLogout, wrapper

beforeEach(() => {
    wrapper = shallow(<LoadingPage />)
})

test('should render Loading page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})



