import React from 'react'

export type TInformationCardProps = {
  title: React.ReactChild,
  description: React.ReactChild,
  severity: 'danger' | 'info' | 'warning',
  icon?: string,
  action?: React.ReactChild,
  layoutTheme: 'default' | 'button_default' | 'button_icon',
  className: string,
}
