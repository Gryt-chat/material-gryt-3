"use client"
import {MdFilledButton, MdElevatedButton, MdOutlinedButton, MdFilledTextField, MdOutlinedTextField, MdSwitch, MdIcon, MdFilledTonalButton, MdIconButton, MdFilledIconButton, MdOutlinedIconButton, MdFilledTonalIconButton, MdTextButton} from '@material/web/all.js';
import React from 'react';
import {createComponent} from '@lit/react';

export const FilledButton = createComponent({
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const ElevatedButton = createComponent({
  tagName: 'md-elevated-button',
  elementClass: MdElevatedButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const OutlinedButton = createComponent({
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const TonalButton = createComponent({
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const TextButton = createComponent({
  tagName: 'md-text-button',
  elementClass: MdTextButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const IconButton = createComponent({
  tagName: 'md-icon-button',
  elementClass: MdIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const FilledIconButton = createComponent({
  tagName: 'md-filled-icon-button',
  elementClass: MdFilledIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const OutlinedIconButton = createComponent({
  tagName: 'md-outlined-icon-button',
  elementClass: MdOutlinedIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const TonalIconButton = createComponent({
  tagName: 'md-filled-tonal-icon-button',
  elementClass: MdFilledTonalIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const FilledTextField = createComponent({
  tagName: 'md-filled-text-field',
  elementClass: MdFilledTextField,
  react: React,
  events: {
    onChange: 'change',
  },
});

export const OutlinedTextField = createComponent({
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onChange: 'change',
  },
});

export const Switch = createComponent({
  tagName: 'md-switch',
  elementClass: MdSwitch,
  react: React,
  events: {
    onClick: 'click',
    onChange: 'change',
  },
});

export const Icon = createComponent({
  tagName: 'md-icon',
  elementClass: MdIcon,
  react: React,
  events: {
    onClick: 'click',
  },
});