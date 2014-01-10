/**
 * Created by Nusret Z on 1/9/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var q = require('q');

var CollaborationMatrix = new Schema();

CollaborationMatrix.add({
 id: { type: Schema.Types.ObjectId, ref: 'Account' }
//,acceptDate: {type: Date, default: Date.now}
//,connType: {type: String, default: 'member'}
//,isWatched: {type: Boolean, default: false}
,recentProfileVisit:{type:Number,default:0}
,maxProfileVisit:{type:Number,default:0}
,recentEmail:{type:Number,default:0}
,maxEmail:{type:Number,default:0}
,recentChat:{type:Number,default:0}
,maxChat:{type:Number,default:0}
,leftMessage:{type:Number,default:0}
,connectionId: { type: String}//Schema.Types.ObjectId, ref: 'Account or Organization' }
});

function DBModel(){
    this.CollaborationMatrix = mongoose.model('CollaborationMatrix', CollaborationMatrix);
    /*this.Organization = mongoose.model('Organization', Organization);
    this.Account = mongoose.model('Account', Account);
    this.Email = mongoose.model('Email', Email);
    this.UsageRecord = mongoose.model('UsageRecord', UsageRecord);*/
}


module.exports = new DBModel();

