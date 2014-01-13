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

var Account      = new Schema();

// Account Schema Started
Account.add({

    nodeId          :   {type: Number, default: null},
    clientURI       :   String,
    timeOffset      :   { type: Number, default: 0},
    userName        :   String,
    userPassword    :   String,
    firstName       :   String,
    lastName        :   String,
    title           :   String,
    email           :   {type:String,index:true},
    secondEmail     :   String,
    thirdEmail      :   String,
    address         :   String,
    profileDesc     :   String,
    status          :   Number,
    accessToken     :   {type:String,index:true},
    activationToken :   String,
    createDate      :   {type: Date, default: Date.now },
    personalConnections  : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Account' }, acceptDate: {type: Date, default: Date.now}, connType: {type: String, default: 'personal'},
        isWatched: {type: Boolean, default: false}, isPinned:  {type: Boolean, default: false} }) ],
    corporateConnections : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Organization' }, acceptDate: {type: Date, default: Date.now}, connType: {type: String, default: 'member'},
        email: {type: String}, isWatched: {type: Boolean, default: false}, isPinned:  {type: Boolean, default: false},
        mainSpaceId: { type: Schema.Types.ObjectId, ref: 'Space' }
    })],
    awards               : [ new Schema({ fromId: { type: Schema.Types.ObjectId, ref: 'Account' }, awardDate: {type: Date, default: Date.now}, awardName: {type: String, default: ''}, awardImage: {type: String, default: ''}, awardText: {type: String, default: ''} }) ],
    imgSrc               : {type: String, default: 'api/defaultImages/image/defaultPersonal.jpg'},
    pinnedOrganizations  : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Organization' }, pinnedDate: {type: Date, default: Date.now} }) ],
    watchedOrganizations : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Organization' }, watchedDate: {type: Date, default: Date.now} }) ],
    watchedAccounts      : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Account' }, watchedDate: {type: Date, default: Date.now} }) ],
    watchedSpaces        : [ new Schema({ id: { type: Schema.Types.ObjectId, ref: 'Space' }, watchedDate: {type: Date, default: Date.now} }) ], // added May 8, 2013
    tags        : [ new Schema({ tagName: String, count: { type: Number, default: 1 },
        setBy: { userId: String, userName: String }, setOn: { type: Date, default:Date.now },
        thumbsUp: [ { userId: String, userName: String } ], thumbsDown: [ { userId: String, userName: String } ]
    })],
    attributes  : [ new Schema({ name: String, type: String, value: String, graphType: String,
        proposedValue: [
            {
                value: String, proposedBy: { userId: String, userName: String }, proposedOn: { type: Date, default:Date.now },
                approved: { type: Boolean, default: false }, approvedOn: { type: Date},
                thumbsUp: [ { userId: String, userName: String } ], thumbsDown: [ { userId: String, userName: String } ]
            }
        ]
    })],
    relations   : [ new Schema( { id: {type: Schema.Types.ObjectId, ref: 'Space'}, relType: String, relDesc: String,
        setBy: { userId: String, userName: String }, setOn: { type: Date, default:Date.now },
        thumbsUp: [ { userId: String, userName: String } ], thumbsDown: [ { userId: String, userName: String } ]
    })],
    firstReminder        : { type: Boolean, default: false },
    secondReminder       : { type: Boolean, default: false },
    mainSpaceId          : { type: Schema.Types.ObjectId, ref: 'Space' },
    sharedSpaceId        : { type: Schema.Types.ObjectId, ref: 'Space' }

});

function DBModel(){
    this.CollaborationMatrix = mongoose.model('CollaborationMatrix', CollaborationMatrix);
    //this.Organization = mongoose.model('Organization', Organization);
    this.Account = mongoose.model('Account', Account);
    //this.Email = mongoose.model('Email', Email);
    //this.UsageRecord = mongoose.model('UsageRecord', UsageRecord);
}


module.exports = new DBModel();

