/* 

A component to configure the "edit category" form.

*/

// import React from 'react';
import React, { PureComponent } from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import Categories from '../../modules/categories/collection.js';


class CategoriesEditForm extends PureComponent {
	// constructor(props) {
	// 	super(props);
	// 	this.myRef = React.createRef();
	// 	// ref = { this.myRef }
	// }

	componentDidMount() {
		var htmlCollection = document.getElementsByClassName("form-control");
		// var arr = [].slice.call(htmlCollection);
		var arr = [...htmlCollection];

		console.log("i am mount ", htmlCollection, htmlCollection.length, arr, arr.length );

		if (document.getElementsByClassName("form-control") != null && arr.length > 0) {
			console.log("found element: ", arr);
			console.log("found element 0: ", arr[0]);
			arr.first().focus();
		}
		// this.name.focus();
	}
	componentDidUpdate() {
		console.log("i am update ", this.refs, this)
		// this.name.focus();
	}

	render() {

		const documentId = this.props.documentId;
		const closeModal = this.props.closeModal;

		return (
			<Components.SmartForm
				collection={Categories}
				documentId={documentId}
				mutationFragment={getFragment('CategoriesItemFragment')}
				showRemove={false} // not properly implemented in the example package
				successCallback={document => {
					closeModal();
				}}
			/>
		);
	}
}


// const CategoriesEditForm = ({documentId, closeModal}) =>

// 	<Components.SmartForm 
//     collection={Categories}
//     documentId={documentId}
//     mutationFragment={getFragment('CategoriesItemFragment')}
//     showRemove={false} // not properly implemented in the example package
//     successCallback={document => {
//       closeModal();
//     }}
//   />

registerComponent({ name: 'CategoriesEditForm', component: CategoriesEditForm });