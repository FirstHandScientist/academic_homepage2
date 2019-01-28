import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-bibtexmodal',
	template: `
	<div class="modal-header">
		<h4 class="modal-title">BibTeX Entry</h4>
		<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	<div class="modal-body">
		<pre class="p-2 bg-light border rounded"><code>{{text}}</code></pre>
	</div>
	`
})
export class BibtexmodalComponent {
	@Input() text;
	constructor(public activeModal: NgbActiveModal) { }
}


function setBib(pub_data): string {
	var text = '@' + pub_data.EntryType + '{' + pub_data.EntryKey
	Object.keys(pub_data.Fields).forEach(function (key) {
		if (key != 'Abstract' && key !='Author_noand'
			&& key != 'Url' && key != 'Slides') {
			text += ', \n  ' + key + ' = {' + pub_data.Fields[key] + '}'
	}
})
	text += '\n}'
	return text;
};


@Component({
	selector: 'app-publication',
	templateUrl: './publication.component.html',
	inputs: ['pub_data', 'show_more'],
	styleUrls: ['./publication.component.css']
})
export class PublicationComponent {

	faArrowDown = faArrowDown;
	faArrowRight = faArrowRight;

	public pub_data;
	public show_more;

	open(): void {
		const modalRef = this.modalService.open(BibtexmodalComponent, {size: 'lg'});
		modalRef.componentInstance.text = setBib(this.pub_data);
	}

	constructor(private modalService: NgbModal) { }

}
