import _ from 'lodash'	
import React from 'react'
import { Accordion } from 'semantic-ui-react'

const panels = _.times(3, () => ({
  title: 'Karla',
  content: '{<div>testando<div>}',
  test: 'dasd',

}))

const AccordionExampleStyled = () => (
  <Accordion panels={panels} styled />
)

export default AccordionExampleStyled