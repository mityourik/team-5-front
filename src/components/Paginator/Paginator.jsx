import React from 'react';
import ReactPaginate from 'react-paginate';

function PaginatedItems({ itemsPerPage }) {
  // Элементы для пагинации
  const [items, setItems] = React.useState([]);

  // Получаем количество страниц
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Обработчик изменения текущей страницы
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // Здесь ваш код для обновления представления с новым смещением
  };

  // eslint-disable-next-line no-lone-blocks
  { /* <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selectedItem) => setPage(selectedItem.selected)}
        containerClassName="paginator"
        pageClassName="paginator__item"
        pageLinkClassName="paginator__link"
        activeClassName="paginator__link--active"
        breakClassName="paginator__item--break"
      /> */ }

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      previousLinkClassName="pagination__link"
      nextLinkClassName="pagination__link"
      disabledClassName="pagination__link--disabled"
      activeClassName="pagination__link--active"
    />
  );
}

export default PaginatedItems;
