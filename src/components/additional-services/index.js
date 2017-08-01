// @flow
import React, { PureComponent } from 'react'
import Service from './service'

type ServiceItem = {
  name: string,
  price: number,
  included: boolean,
}

type Props = {
  services: ServiceItem[],
  onServiceClick: (service: ServiceItem) => void,
}

class AdditionalServices extends PureComponent<Props> {
  render() {
    const { services, onServiceClick } = this.props
    return (
      <div>
        {services && services.map((service) => (
          <Service
            {...service}
            onClick={() => onServiceClick(service)}
          />
        ))}
      </div>
    )
  }
}

export default AdditionalServices
