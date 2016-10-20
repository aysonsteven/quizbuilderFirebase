import { Component } from '@angular/core';
import { Questionsform } from '../questionsform/questionsform'
import { Xapi } from '../../xmodule/providers/xapi';
import * as xi from '../../xmodule/interfaces/xapi';
import { Dashboard } from '../dashboard/dashboard';
import { NavController } from 'ionic-angular';
@Component( {
    templateUrl: `question-list.html`
})
export class QuestionList {
    posts: xi.PostQueryResponse;
    constructor( private x: Xapi, private navCtrl: NavController ) {
        console.log('Dashboard::onClickList()');
        let args: xi.PostQuery = <xi.PostQuery> {};
        args.category_name = 'question';
        this.x.get_posts( args, re => {
        console.log('callback: ', re);
        this.posts = re.data;
        }, err => {
        this.x.error( err );
        });
    }
    onClickBack(){
        console.log('clicked back');
        this.navCtrl.setRoot( Dashboard );
        
    }
    onClickUpdate(ID){
        console.log(ID);
        // this.navCtrl.setRoot( Questionsform );
    }

    onClickDelete(ID){
        console.log(ID);
        this.x.delete_post( ID,(res: xi.Response) => {
            if(res.success){
                delete this.posts[ res.data ];
                this.x.alert('Delete','Question Deleted successfully')
            }else{
                this.x.error ( res.data.message );
            }
        },e=>{
            this.x.error( e );
        })
    }

}