'use client';

import { FaLink } from 'react-icons/fa';
import { Button } from '@mantine/core';
import classes from './LinkButton.module.css';


export default function LinkButton({ url }: { url: string }) {
  return (
    <div className={classes.stickyWrapper}>
      <Button
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.button,
          inner: classes.inner,
          section: classes.section,
        }}
        rightSection={<FaLink size={18} />}
      >
        <p className='font-semibold'>Visit</p>
      </Button>
    </div>
  );
}
