import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '../../components/Header'

let startLogout, wrapper

beforeEach(() => {
    startLogout = jest.fn()
    wrapper = shallow(<Header logout={startLogout}/>)
})

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    wrapper.find('button').prop('onClick')()
    expect(startLogout).toBeCalled()
})



