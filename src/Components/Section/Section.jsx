//npm import
import React from 'react';
//Local import
import EntryForm from "../../Containers/EntryForm";
import ProductsDisplay from "../../Containers/ProductsDisplay";

const Section = () => {
  return (
    <div id="section">
      <section>
        <EntryForm />
        <ProductsDisplay />
      </section>
    </div>
  );
};

export default Section;
