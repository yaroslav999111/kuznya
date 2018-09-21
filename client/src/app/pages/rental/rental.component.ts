import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  myAllProjectsByStatus: any;
  defaultImageBase64: any= "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vbmIY3vZLKFC0zQ9icVtzjZ/UosTU5E54/hZjCXIeEkkEtHX/6xvxfoB+IGCRfQVE+xz8skn52S/sf5u27bNdXtNTU36HnwxdeFLBelndPbA8w8rcKxEshtisZgrkWYyGX02ZOavmNdeLIqi6PHe7J5ehMDybbAtSf7ASrcMGzZMH2jF7bpNmza5bu+DDz7QrRcSOgndEN8uiswqR9qKsrIy14MDqzLD1s1eC52toSORiCEQpdh78NYLP1gWmo9eV1eHfv366X0GjkUq7ty50/Xf4r333gPQU/dv1KhRBfWplJBe6GYx2uxBcxvSGgqFdGE5eeD51FhWqcWrmusMNpCxJBHej1AMfGSdF/XYVFXVU4L5yjvsJB2rc9msYEIfO3as9AktAAldFzPvpCq0OENlZaU+Izud2fhZFoDuI/AK3uteTL64iJV4ihlA2BnoZtub7777ruN2stksNm7cCAC44IILCu5PKSG90MUHU6y55gYW5+10Rufj4o9XznQoFNIF7tXWGmC0gPjPqxhvPkvN5Qc9FlC0du1ax+189tlnuiOOhN6D9EI3E6SbM855WCqk08GC+QbY0UPM7Pf6NFXAWBSDz5orFLGPXqS/futb3wJgPHyS5bv/97//dWwt/P3vfwfQE8BEQu9BeqEzzB58t2JghRydwsJdWYEFt2a/03sAxyIAj8fBDbynvBihn3rqqTmhqmyw3bt3r+NttlWrVgEAzjnnnKKryJYKJPT/x2y2KOR8dH4bKx8snl50wHl5ThifNqqqqumhC4VgFmjE/18IgUAAEydOzGmTDVCvvfZa3jZ2796NdevWAQCuuOKKgvtSakgvdDtBul3L8g4qp6Y7kLt8KLYgIg8zsZmlwGqzFesPsDLdix1Evve97+ntMJ8C+/fGG2/kvX7lypX65zllypSi+lJKSC90OzO5kKQWhpPUSqt17fE6VaSQohj52mK4KYppx+WXX67X2hc/h3Xr1hlST81YsWIFAGDkyJEUKMMhvdDtZnS3TjF+Rnda64w57viiFV4640SrhM/SKwarPhbbblVVFa666irT9lKpFJYvX2557a5du7BhwwYAwHXXXSd9xhqP9J+EndDdzk58imtHR4fje7NEmkK9/YXg5fnovIXghTVy00036V+LA8pf/vIXy7/Ls88+q4cV33rrrUX3o5SQXuhm5myxlWABZ0Lnc69ZAo3XkXFWbRUrSN5S8NqReOmll2L8+PEAcktof/TRR6Z76t3d3XjuuecAABdddBGGDRtWdD9KCemFzjAThNtZj3/InQjdTGxeB87wvgIxAs+rdr1GURT86le/AmD+N/jDH/6Q87PFixfjwIEDAIC77rrruPXNr0gvdCuxAe5NaD7xwm0SBo+XpruYU+/FNhhgPZB5tTU4ZcoUTJ48OefvoygKXnnlFXz00Uf6z3bt2oV58+YB6ImEu+yyyzzpQykhvdDtHni3TjFe3E6KVvDVWXi8zEe3im0vdjCx2gL0asdAURQ89dRTOeejsyzDmTNnYtu2bdi0aRO++93v4siRIwgEAnj88cc9jUMoFaQvPGH3UJSXl7tqixe6k6IVLA6d74umadizZw8WL16sZ4ix6Dm++k0ymUQqlUJ1dTWuvPJKy/chRrAxihUkvzXIR8Z5aY2MHDkSTz/9NGbPnp0zIO/YsSOnRNS9996LcePGeXb/UkJ6oduJmZVfdkpra6v+tZMMNKvosjfffBNvvvmm4Xf80co85eXlaGlpsbQCYrGY6c9feOEF/Oc//9HbTCQS+hHRLFqP/ax///54+OGHDduH7HPj49I1TcNrr72GLVu26O+/s7NTT8ft6OhAMBhEIpFAMBhEXV0d5s+fb/s5X3fdddixYwcWLFhg+RoAmDdvHh588EHb18iM9EJntcrMcOsU42dxJ4OEm1NNrGZK/kRWM/r372/qybfbj2bwjrtbbrnFMIMOGDAgpyIPACxZsiRvuzwTJkzANddcY/ua+++/HyNHjsQdd9yBpqYmQ/8uvfRSzJ8/H+eff76r+8qG9EIfMWIEdu/ejYaGBv1hDYfDqKiocB1ZddNNN2Hs2LE4/fTTHV07c+ZMfPvb39YPi2A54+l0GsFg0DCL85Fi/AmmJ510km1hhdraWjz22GP49NNP9ZTPUCiEiooKpFIphEIhhMNhJBIJvQoNWyp0dXWhu7sb5eXlOSed9O3bFw899JBeEIJdU1FRoe9lq6qKRCJhOJJaVVV0dnYilUohlUrh61//uqPPdvbs2bj22mvxj3/8A62trSgvL8eECROkr9fuFEXzctPWJdls1nA+lhWBQADV1dVfQY8Iwjnd3d2OIiBVVdXr1vcW0nvdCUIGSOgEIQEkdIKQABI6QUiAVF73eDyOw4cPo6urC/F4HKFQCMOGDcuJvjKDnTHOvOKsPDPzfrOz0+y2zPhTWvlyyQRxvJFG6AcPHsSoUaNyYrRDoRDGjx+PBQsWYPLkyabXJpNJnHPOOdi8ebN+EKOqqoY6bIFAAH369MG+fftMg1eSySTGjRuH3bt3I51O46qrrsKyZcss+5tKpXDnnXfqFWFuv/1206ivZDKJ+fPn45JLLtH7P3fuXHz44Yf6FhcbiMLhMMrLy1FXV2coK5VMJjFo0CDcf//9UBQFq1evxuuvv47u7m79fUYiEaiqilgshsGDByMQCCASiejbgKqq4sILL9QPSwR6Djl8/fXX0draqp80G4vF0NXVhfLycrS1teGLL77A4cOHMXXqVPzoRz8CAKxduxYffPABAKC+vh5Tp041/Yy2bNmCDRs2YPr06TlxC3fddRe2b98OTdNwww03YNasWZaftQxII/TDhw8bRH7RRRfhkksuwZYtW7BixQpcdtllWLRoEX784x/nXLt//358+OGH+vf19fWora1FKpXS94kVRUFVVZVlKOqBAwfwySef6N+vWrUK8XjcMnKtu7sbixYt0vfOJ06caCr0VCqFhQsXIpPJ6EIfM2YMOjs7EY/H0dnZiYEDB2LZsmV6QE80GsU111yDjo4OdHR0oLW1VT88AegR6GuvvYbu7m590Gpvb8fRo0f1WIMBAwYgEAigo6MDyWQSqqpi8eLFmDZtGgBg69atOPPMMx0fVFlVVaUL/ZlnnsHzzz8PAOjXr5+l0F966SU88MADOO200/QKsox169bpteBHjBhBQu/tDnxViMkd48aNwy9/+UsAPeGTkydPxt13340rrrgC9fX1hteK4r366qvxpz/9ydX9xRNBu7u7sWfPHowePdryGiex6cyi4CPnxDRNTdPw6quv6oc6RqNRLFu2zHJQmjt3LubOnWv42e23346nn35a//7RRx/F9ddfj2w2q4e48suR3bt36yIfMWIEVq1ahVAohO7ubn3po2kaYrEYqqurDcsnvl9OohPNko/40OZeDBU5YZBG6OJDzYerjhkzBsuWLcOECRPw+OOPY+HChbbXFpKCumvXrpyfNTQ0WApdPIPNKpOOHbmUTxD8YMBOcHWT5SUOlGzZEggE8mb5xWIxjB071vG9+DwBu5NlzE50Ybg98rrUkcbrLmaTibHj5557Li6++GIsWbIk5+Fi5it7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";
  filteredArray: any = [];
  myFilter: string = '';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((3)).subscribe(data => {
      this.myAllProjectsByStatus = data;
      this.filteredArray = data;
      this.checkForAvatar();
    });
  }

  checkForAvatar() {
    if (this.myAllProjectsByStatus['avatar'] === undefined) {
      this.findFree();
    }
  }

  findFree() {
    for(let i = 0; i <= this.myAllProjectsByStatus.length; i++) {
      if(!this.myAllProjectsByStatus[i]['avatar']) {
        this.myAllProjectsByStatus[i]['avatar'] = this.defaultImageBase64;
      }
    }
  }


  onSubmit() {
    this.filtered();
  }

  filtered() {
    const myArr = [];

    for (let i = 0; i <= this.myAllProjectsByStatus.length; i++) {
      if(this.myAllProjectsByStatus[i] != undefined) {
        if (this.myAllProjectsByStatus[i].title.includes(this.myFilter)) {
          myArr.push(this.myAllProjectsByStatus[i]);
        }
      }
    }


    this.filteredArray = myArr;

  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

}
