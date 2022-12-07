import React from 'react'

export type TInformationCardProps = {
  title: React.ReactChild,
  description: React.ReactChild,
  severity: 'danger' | 'info' | 'warning',
  layoutTheme?: 'default' | 'button_default' | 'button_icon',
  icon?: string,
  action?: React.ReactChild,
  className?: string,
}
