import React from 'react';

import styled from './Container.module.css';

interface containerProps {
  children: React.ReactNode;
}

export default function Container({ children }: containerProps) {
  return <div className={styled.container}>{children}</div>;
}
