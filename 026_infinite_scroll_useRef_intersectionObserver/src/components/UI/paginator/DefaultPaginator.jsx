import React from "react"
import css from "./DefaultPaginator.module.css"
import DefaultButton from "../buttons/DefaultButton";

const DefaultPaginator = function({currentPage, totalPages, showNearestPages, setPage, isDisabled}) {

  const defineChainArray = (currentPage, totalPages, showNearestPages) => {
    let renderChain = []
    const itemsChainLength = showNearestPages * 2 + 1;

    if (0 === totalPages) {
      return []
    } else {
      // just simplest case
      if (totalPages < 6) {
        for (let i = 1; i < (totalPages + 1); i++) {
          renderChain.push(i)
        }
      } else {
        let start = currentPage - showNearestPages;
        if (start < 1) {
          start = 1;
        }

        let end = start + itemsChainLength;
        if (totalPages < end) {
          end = totalPages + 1
        }

        if (2 < start) {
          renderChain.push(1)
          renderChain.push('...')
        } else if (1 < start) {
          renderChain.push(1)
        }

        for (let i = start; i < (end); i++) {
          renderChain.push(i)
        }

        if (currentPage < totalPages - showNearestPages - 1) {
          renderChain.push('...')
          renderChain.push(totalPages)
        } else if (currentPage < totalPages - showNearestPages) {
          renderChain.push(totalPages)

        }
      }
    }

    return renderChain;
  }

  const renderChain = defineChainArray(currentPage, totalPages, showNearestPages)

  if (0 === totalPages) {
    return (<div style={{display: 'none'}}>No pages</div>)
  } else {
    return (
      <div className={css.paginator}>{
        renderChain.map( (element, index) =>
        {
          return(
            <DefaultButton
              key={index}
              disabled={(isDisabled) || (currentPage == element) || ('...' === element)}
              onClick={() => setPage(element)}
              className={ (currentPage == element)  ? css.paginator_active_item : '' }
            >
              {element}
            </DefaultButton>
          )
        })
      }</div>
    )
  }
}

export default DefaultPaginator;