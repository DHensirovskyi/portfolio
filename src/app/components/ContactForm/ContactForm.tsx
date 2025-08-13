'use client';

import { useRef, useState } from 'react';
import { Button, Group, Textarea, TextInput } from '@mantine/core';
import classes from './ContactForm.module.css';
import { useForm } from '@mantine/form';
import { dict } from '@/app/i18n';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ContactForm() {
  const { language } = useLanguage();
  const t = dict[language].contact;
  const ref = useRef(null);

  const [submissionStatus, setSubmissionStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { email: '', name: '', message: '' },
    validate: {
      name: (v) => (v.trim().length < 2 ? 'The name is too short' : null),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : 'Incorrect email'),
      message: (v) => (v.trim().length < 4 ? 'The message is too short' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setSubmissionStatus({ submitting: true, succeeded: false, error: false });
    try {
      const response = await fetch('https://formspree.io/f/mrbljnqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (e) {
      console.error('Failed to submit the form:', e);
      setSubmissionStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  if (submissionStatus.succeeded) {
    return (
      <p style={{ color: '#CAE8BD', fontWeight: 'bold', textAlign: 'center' }}>
        {t.ok}
      </p>
    );
  }

  return (
    <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)} id="Kontakt" ref={ref}>
      <TextInput
        {...form.getInputProps('name')}
        error={form.errors.name}
        classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
        label="Name"
        key={form.key('name')}
        placeholder="Jane Smith"
        required
      />

      <TextInput
        {...form.getInputProps('email')}
        error={form.errors.email}
        classNames={{ root: classes.root, label: classes.label, input: classes.input, error: classes.error }}
        label="E-mail"
        key={form.key('email')}
        placeholder="jane@mail.com"
        required
      />

      <Textarea
        {...form.getInputProps('message')}
        error={form.errors.message}
        classNames={{ root: classes.root, label: classes.label, input: classes.textinput, error: classes.error }}
        label={t.question}
        placeholder={t.questionText}
        minRows={4}
        required
      />

      <Group justify="flex-end" mt="md">
        <Button
          className="py-3 w-full transition duration-300 hover:scale-[0.98]"
          type="submit"
          loading={submissionStatus.submitting}
          id="button"
        >
          {t.button}
        </Button>
      </Group>

      {submissionStatus.error && (
        <p style={{ color: 'red', fontSize: '1rem' }}>{t.error}</p>
      )}
    </form>
  );
}
