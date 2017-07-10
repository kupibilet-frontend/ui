// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Service from './service'

type ServiceItem = {
  name: string,
  price: number,
  included: boolean,
}

type Props = {
  services: ServiceItem[],
}

class AdditionalServices extends PureComponent<Props> {
  render() {
    const { services } = this.props
    return (
      <div>
        {services.map((service) => (
          <Service
            {...service}
          />
        ))}
      </div>
    )
  }
}

export default AdditionalServices
