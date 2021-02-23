const scrollable = {
  props: {
    'data-polaris-scrollable': true
  },
  selector: '[data-polaris-scrollable]'
};
const overlay = {
  props: {
    'data-polaris-overlay': true
  },
  selector: '[data-polaris-overlay]'
};
const layer = {
  props: {
    'data-polaris-layer': true
  },
  selector: '[data-polaris-layer]'
};
const unstyled = {
  props: {
    'data-polaris-unstyled': true
  },
  selector: '[data-polaris-unstyled]'
};
const dataPolarisTopBar = {
  props: {
    'data-polaris-top-bar': true
  },
  selector: '[data-polaris-top-bar]'
};
const headerCell = {
  props: {
    'data-polaris-header-cell': true
  },
  selector: '[data-polaris-header-cell]'
};
const portal = {
  props: ['data-portal-id'],
  selector: '[data-portal-id]'
};
const DATA_ATTRIBUTE = {
  overlay,
  layer
};

export { DATA_ATTRIBUTE, dataPolarisTopBar, headerCell, layer, overlay, portal, scrollable, unstyled };
