import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'ngbd-nav-vertical',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule,ChartModule,ReactiveFormsModule, CommonModule, RouterModule],
  styleUrl: './sidebar.component.css',
	templateUrl: './sidebar.component.html',
})
export class NgbdNavVertical {
	active = 'top';
  title = 'angular-charts-youtube';
  blogForm: FormGroup;
  submissionSuccess = false;
  isModifying = false;
  ModificationSuccess = false;
  // ... existing code for your charts ...

  constructor(private formBuilder: FormBuilder) {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
      image: [null, Validators.required],
      title1: ['', Validators.required],
      paragraph1: ['', Validators.required],
      title2: ['', Validators.required],
      paragraph2: ['', Validators.required],
      title3: ['', Validators.required],
      paragraph3: ['', Validators.required]
    });

    // ... existing code for your charts initialization ...
  }

  deleteBlog(blogId: number) {
   /* this.blogService.deleteBlog(blogId).subscribe({
      next: () => {
        // Handle deletion success, like updating the UI or showing a success message
      },
      error: (error: string) => {
        console.log(error)
      }
    });*/
  }

  modifyBlog(blog: any) {
    this.isModifying = true;
    this.blogForm.patchValue(blog); // Populate the form with the blog data
  }

  submitModify() {
    /*if (this.blogForm.valid) {
      this.blogService.updateBlog(this.blogForm.value).subscribe({
        next: () => {
          this.ModificationSuccess = true;
          this.isModifying = false;
          // Handle successful modification, like updating the UI or showing a success message
        },
        error: (error: string) => {
          console.log(error)
        }
      });
    }*/
  }

  submitBlog() {

    // Extract tags and convert them into an array
    const tags = this.blogForm.value.tags.split(',').map((tag: string) => tag.trim());

    // Other form values
    const formValues = {
      ...this.blogForm.value,
      tags
    };

    console.log(formValues);
    this.blogForm.reset();
    this.submissionSuccess = false;
    setTimeout(() => this.submissionSuccess = false, 3000);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files.length) {
      const file = input.files[0];
      const imagePath = `assets/images/${file.name}`;
      this.blogForm.patchValue({ image: imagePath });
      const imageControl = this.blogForm.get('image');
      if (imageControl) {
      imageControl.updateValueAndValidity();
      }
    }
  }



  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'New Users'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Users Entered',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Tags Trafic',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Technology', y: 1, color: '#eeeeee' },
          { name: 'Environment', y: 2, color: '#393e46' },
          { name: 'HR Topics', y: 3, color: '#00adb5' },
          { name: 'News', y: 4, color: '#eeeeee' },
          { name: 'Beauty', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}
