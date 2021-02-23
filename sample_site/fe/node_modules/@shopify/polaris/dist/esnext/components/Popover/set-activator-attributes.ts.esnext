function setActivatorAttributes(activator, {
  id,
  active = false,
  ariaHaspopup,
  activatorDisabled = false
}) {
  if (!activatorDisabled) {
    activator.tabIndex = activator.tabIndex || 0;
  }

  activator.setAttribute('aria-controls', id);
  activator.setAttribute('aria-owns', id);
  activator.setAttribute('aria-expanded', String(active));

  if (ariaHaspopup != null) {
    activator.setAttribute('aria-haspopup', String(ariaHaspopup));
  }
}

export { setActivatorAttributes };
