function measureColumn(tableData) {
  return function (column, index) {
    const {
      firstVisibleColumnIndex,
      tableLeftVisibleEdge: tableStart,
      tableRightVisibleEdge: tableEnd
    } = tableData;
    const leftEdge = column.offsetLeft;
    const rightEdge = leftEdge + column.offsetWidth;
    const isVisibleLeft = isEdgeVisible(leftEdge, tableStart, tableEnd);
    const isVisibleRight = isEdgeVisible(rightEdge, tableStart, tableEnd);
    const isVisible = isVisibleLeft || isVisibleRight;

    if (isVisible) {
      tableData.firstVisibleColumnIndex = Math.min(firstVisibleColumnIndex, index);
    }

    return {
      leftEdge,
      rightEdge,
      isVisible
    };
  };
}
function isEdgeVisible(position, start, end) {
  const minVisiblePixels = 30;
  return position >= start + minVisiblePixels && position <= end - minVisiblePixels;
}
function getPrevAndCurrentColumns(tableData, columnData) {
  const {
    firstVisibleColumnIndex
  } = tableData;
  const previousColumnIndex = Math.max(firstVisibleColumnIndex - 1, 0);
  const previousColumn = columnData[previousColumnIndex];
  const currentColumn = columnData[firstVisibleColumnIndex];
  return {
    previousColumn,
    currentColumn
  };
}

export { getPrevAndCurrentColumns, isEdgeVisible, measureColumn };
