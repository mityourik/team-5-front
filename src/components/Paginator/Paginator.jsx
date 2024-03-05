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

  return (
    <>
      {/* Ваш компонент списка с элементами */}
      {/* ... */}

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
        // Добавьте дополнительные классы и пропсы по необходимости
      />
    </>
  );
}

export default PaginatedItems;
