goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____7863 = reader;
if(and__3822__auto____7863)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____7863;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2452__auto____7864 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____7865 = (cljs.reader.read_char[goog.typeOf(x__2452__auto____7864)]);
if(or__3824__auto____7865)
{return or__3824__auto____7865;
} else
{var or__3824__auto____7866 = (cljs.reader.read_char["_"]);
if(or__3824__auto____7866)
{return or__3824__auto____7866;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____7871 = reader;
if(and__3822__auto____7871)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____7871;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2452__auto____7872 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____7873 = (cljs.reader.unread[goog.typeOf(x__2452__auto____7872)]);
if(or__3824__auto____7873)
{return or__3824__auto____7873;
} else
{var or__3824__auto____7874 = (cljs.reader.unread["_"]);
if(or__3824__auto____7874)
{return or__3824__auto____7874;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__7875 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__7875.buffer_atom)))
{var idx__7876 = cljs.core.deref.call(null,this__7875.index_atom);
cljs.core.swap_BANG_.call(null,this__7875.index_atom,cljs.core.inc);
return (this__7875.s[idx__7876]);
} else
{var buf__7877 = cljs.core.deref.call(null,this__7875.buffer_atom);
cljs.core.swap_BANG_.call(null,this__7875.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__7877);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__7878 = this;
return cljs.core.swap_BANG_.call(null,this__7878.buffer_atom,(function (p1__7858_SHARP_){
return cljs.core.cons.call(null,ch,p1__7858_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____7880 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____7880))
{return or__3824__auto____7880;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____7885 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____7885)
{return or__3824__auto____7885;
} else
{var and__3822__auto____7887 = (function (){var or__3824__auto____7886 = ("+" === initch);
if(or__3824__auto____7886)
{return or__3824__auto____7886;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____7887))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__7888 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__7888);
return next_ch__7888;
})());
} else
{return and__3822__auto____7887;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__7889){
var rdr = cljs.core.first(arglist__7889);
var msg = cljs.core.rest(arglist__7889);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____7893 = !((ch === "#"));
if(and__3822__auto____7893)
{var and__3822__auto____7894 = !((ch === "'"));
if(and__3822__auto____7894)
{var and__3822__auto____7895 = !((ch === ":"));
if(and__3822__auto____7895)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____7895;
}
} else
{return and__3822__auto____7894;
}
} else
{return and__3822__auto____7893;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__7900 = (new goog.string.StringBuffer(initch));
var ch__7901 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____7902 = (ch__7901 == null);
if(or__3824__auto____7902)
{return or__3824__auto____7902;
} else
{var or__3824__auto____7903 = cljs.reader.whitespace_QMARK_.call(null,ch__7901);
if(or__3824__auto____7903)
{return or__3824__auto____7903;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__7901);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__7901);
return sb__7900.toString();
} else
{{
var G__7904 = (function (){sb__7900.append(ch__7901);
return sb__7900;
})();
var G__7905 = cljs.reader.read_char.call(null,rdr);
sb__7900 = G__7904;
ch__7901 = G__7905;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__7909 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____7910 = (ch__7909 === "n");
if(or__3824__auto____7910)
{return or__3824__auto____7910;
} else
{var or__3824__auto____7911 = (ch__7909 === "r");
if(or__3824__auto____7911)
{return or__3824__auto____7911;
} else
{return (ch__7909 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__7913 = re.exec(s);
if((matches__7913 == null))
{return null;
} else
{if((matches__7913.length === 1))
{return (matches__7913[0]);
} else
{return matches__7913;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__7921 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__7922 = (groups__7921[2]);
if(!((function (){var or__3824__auto____7923 = (group3__7922 == null);
if(or__3824__auto____7923)
{return or__3824__auto____7923;
} else
{return (group3__7922.length < 1);
}
})()))
{return 0;
} else
{var negate__7924 = ((("-" === (groups__7921[1])))?-1:1);
var a__7925 = (cljs.core.truth_((groups__7921[3]))?[(groups__7921[3]),10]:(cljs.core.truth_((groups__7921[4]))?[(groups__7921[4]),16]:(cljs.core.truth_((groups__7921[5]))?[(groups__7921[5]),8]:(cljs.core.truth_((groups__7921[7]))?[(groups__7921[7]),parseInt((groups__7921[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__7926 = (a__7925[0]);
var radix__7927 = (a__7925[1]);
if((n__7926 == null))
{return null;
} else
{return (negate__7924 * parseInt(n__7926,radix__7927));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__7931 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__7932 = (groups__7931[1]);
var denominator__7933 = (groups__7931[2]);
return (parseInt(numinator__7932) / parseInt(denominator__7933));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__7936 = re.exec(s);
if((function (){var and__3822__auto____7937 = !((matches__7936 == null));
if(and__3822__auto____7937)
{return ((matches__7936[0]) === s);
} else
{return and__3822__auto____7937;
}
})())
{if((matches__7936.length === 1))
{return (matches__7936[0]);
} else
{return matches__7936;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__7939 = parseInt(code_str,16);
return String.fromCharCode(code__7939);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__7942 = cljs.reader.read_char.call(null,reader);
var mapresult__7943 = cljs.reader.escape_char_map.call(null,ch__7942);
if(cljs.core.truth_(mapresult__7943))
{return mapresult__7943;
} else
{if((ch__7942 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__7942,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__7942 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__7942,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__7942))
{return String.fromCharCode(ch__7942);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__7942);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__7945 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__7945)))
{{
var G__7946 = cljs.reader.read_char.call(null,rdr);
ch__7945 = G__7946;
continue;
}
} else
{return ch__7945;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__7953 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__7954 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__7954))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__7954))
{return cljs.core.persistent_BANG_.call(null,a__7953);
} else
{var temp__3971__auto____7955 = cljs.reader.macros.call(null,ch__7954);
if(cljs.core.truth_(temp__3971__auto____7955))
{var macrofn__7956 = temp__3971__auto____7955;
var mret__7957 = macrofn__7956.call(null,rdr,ch__7954);
{
var G__7959 = (((mret__7957 === rdr))?a__7953:cljs.core.conj_BANG_.call(null,a__7953,mret__7957));
a__7953 = G__7959;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__7954);
var o__7958 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__7960 = (((o__7958 === rdr))?a__7953:cljs.core.conj_BANG_.call(null,a__7953,o__7958));
a__7953 = G__7960;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__7965 = cljs.reader.read_char.call(null,rdr);
var dm__7966 = cljs.reader.dispatch_macros.call(null,ch__7965);
if(cljs.core.truth_(dm__7966))
{return dm__7966.call(null,rdr,_);
} else
{var temp__3971__auto____7967 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__7965);
if(cljs.core.truth_(temp__3971__auto____7967))
{var obj__7968 = temp__3971__auto____7967;
return obj__7968;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__7965);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__7970 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__7970)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__7970);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__7977 = (new goog.string.StringBuffer(initch));
var ch__7978 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____7979 = (ch__7978 == null);
if(or__3824__auto____7979)
{return or__3824__auto____7979;
} else
{var or__3824__auto____7980 = cljs.reader.whitespace_QMARK_.call(null,ch__7978);
if(or__3824__auto____7980)
{return or__3824__auto____7980;
} else
{return cljs.reader.macros.call(null,ch__7978);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__7978);
var s__7981 = buffer__7977.toString();
var or__3824__auto____7982 = cljs.reader.match_number.call(null,s__7981);
if(cljs.core.truth_(or__3824__auto____7982))
{return or__3824__auto____7982;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__7981,"]");
}
} else
{{
var G__7983 = (function (){buffer__7977.append(ch__7978);
return buffer__7977;
})();
var G__7984 = cljs.reader.read_char.call(null,reader);
buffer__7977 = G__7983;
ch__7978 = G__7984;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__7987 = (new goog.string.StringBuffer());
var ch__7988 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__7988 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__7988))
{{
var G__7989 = (function (){buffer__7987.append(cljs.reader.escape_char.call(null,buffer__7987,reader));
return buffer__7987;
})();
var G__7990 = cljs.reader.read_char.call(null,reader);
buffer__7987 = G__7989;
ch__7988 = G__7990;
continue;
}
} else
{if(("\"" === ch__7988))
{return buffer__7987.toString();
} else
{if("\uFDD0'default")
{{
var G__7991 = (function (){buffer__7987.append(ch__7988);
return buffer__7987;
})();
var G__7992 = cljs.reader.read_char.call(null,reader);
buffer__7987 = G__7991;
ch__7988 = G__7992;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__7994 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__7994,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__7994,0,token__7994.indexOf("/")),cljs.core.subs.call(null,token__7994,(token__7994.indexOf("/") + 1),token__7994.length));
} else
{return cljs.reader.special_symbols.call(null,token__7994,cljs.core.symbol.call(null,token__7994));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__8004 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__8005 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__8004);
var token__8006 = (a__8005[0]);
var ns__8007 = (a__8005[1]);
var name__8008 = (a__8005[2]);
if(cljs.core.truth_((function (){var or__3824__auto____8010 = (function (){var and__3822__auto____8009 = !((void 0 === ns__8007));
if(and__3822__auto____8009)
{return (ns__8007.substring((ns__8007.length - 2),ns__8007.length) === ":/");
} else
{return and__3822__auto____8009;
}
})();
if(cljs.core.truth_(or__3824__auto____8010))
{return or__3824__auto____8010;
} else
{var or__3824__auto____8011 = ((name__8008[(name__8008.length - 1)]) === ":");
if(or__3824__auto____8011)
{return or__3824__auto____8011;
} else
{return !((token__8006.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__8006);
} else
{if((function (){var and__3822__auto____8012 = !((ns__8007 == null));
if(and__3822__auto____8012)
{return (ns__8007.length > 0);
} else
{return and__3822__auto____8012;
}
})())
{return cljs.core.keyword.call(null,ns__8007.substring(0,ns__8007.indexOf("/")),name__8008);
} else
{return cljs.core.keyword.call(null,token__8006);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__8018 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__8018))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__8019 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__8020__8021 = o__8019;
if(G__8020__8021)
{if((function (){var or__3824__auto____8022 = (G__8020__8021.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____8022)
{return or__3824__auto____8022;
} else
{return G__8020__8021.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__8020__8021.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__8020__8021);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__8020__8021);
}
})())
{return cljs.core.with_meta.call(null,o__8019,cljs.core.merge.call(null,cljs.core.meta.call(null,o__8019),m__8018));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__8026 = cljs.reader.read_char.call(null,reader);
if((ch__8026 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__8026))
{{
var G__8029 = reader;
var G__8030 = eof_is_error;
var G__8031 = sentinel;
var G__8032 = is_recursive;
reader = G__8029;
eof_is_error = G__8030;
sentinel = G__8031;
is_recursive = G__8032;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__8026))
{{
var G__8033 = cljs.reader.read_comment.call(null,reader,ch__8026);
var G__8034 = eof_is_error;
var G__8035 = sentinel;
var G__8036 = is_recursive;
reader = G__8033;
eof_is_error = G__8034;
sentinel = G__8035;
is_recursive = G__8036;
continue;
}
} else
{if("\uFDD0'else")
{var f__8027 = cljs.reader.macros.call(null,ch__8026);
var res__8028 = (cljs.core.truth_(f__8027)?f__8027.call(null,reader,ch__8026):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__8026))?cljs.reader.read_number.call(null,reader,ch__8026):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__8026):null)));
if((res__8028 === reader))
{{
var G__8037 = reader;
var G__8038 = eof_is_error;
var G__8039 = sentinel;
var G__8040 = is_recursive;
reader = G__8037;
eof_is_error = G__8038;
sentinel = G__8039;
is_recursive = G__8040;
continue;
}
} else
{return res__8028;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__8042 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__8042,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__8044 = (new goog.string.StringBuffer(s));
while(true){
if((b__8044.getLength() < width))
{{
var G__8045 = b__8044.append("0");
b__8044 = G__8045;
continue;
}
} else
{return b__8044.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____8048 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____8048))
{var or__3824__auto____8049 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____8049))
{return or__3824__auto____8049;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____8048;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__8054 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__8055 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__8055:dim_norm__8054),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__8056 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__8058 = (function (low,n,high,msg){
if((function (){var and__3822__auto____8057 = (low <= n);
if(and__3822__auto____8057)
{return (n <= high);
} else
{return and__3822__auto____8057;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____8059 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__8056,ts)));
if(cljs.core.truth_(temp__3974__auto____8059))
{var vec__8060__8063 = temp__3974__auto____8059;
var vec__8061__8064 = cljs.core.nth.call(null,vec__8060__8063,0,null);
var ___8065 = cljs.core.nth.call(null,vec__8061__8064,0,null);
var years__8066 = cljs.core.nth.call(null,vec__8061__8064,1,null);
var months__8067 = cljs.core.nth.call(null,vec__8061__8064,2,null);
var days__8068 = cljs.core.nth.call(null,vec__8061__8064,3,null);
var hours__8069 = cljs.core.nth.call(null,vec__8061__8064,4,null);
var minutes__8070 = cljs.core.nth.call(null,vec__8061__8064,5,null);
var seconds__8071 = cljs.core.nth.call(null,vec__8061__8064,6,null);
var milliseconds__8072 = cljs.core.nth.call(null,vec__8061__8064,7,null);
var vec__8062__8073 = cljs.core.nth.call(null,vec__8060__8063,1,null);
var ___8074 = cljs.core.nth.call(null,vec__8062__8073,0,null);
var ___8075 = cljs.core.nth.call(null,vec__8062__8073,1,null);
var ___8076 = cljs.core.nth.call(null,vec__8062__8073,2,null);
var V__8077 = vec__8060__8063;
var vec__8078__8081 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__8053_SHARP_){
return parseInt(p1__8053_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__8051_SHARP_,p2__8050_SHARP_){
return cljs.core.update_in.call(null,p2__8050_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__8051_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__8052_SHARP_){
if(cljs.core._EQ_.call(null,p1__8052_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__8077));
var vec__8079__8082 = cljs.core.nth.call(null,vec__8078__8081,0,null);
var ___8083 = cljs.core.nth.call(null,vec__8079__8082,0,null);
var y__8084 = cljs.core.nth.call(null,vec__8079__8082,1,null);
var mo__8085 = cljs.core.nth.call(null,vec__8079__8082,2,null);
var d__8086 = cljs.core.nth.call(null,vec__8079__8082,3,null);
var h__8087 = cljs.core.nth.call(null,vec__8079__8082,4,null);
var m__8088 = cljs.core.nth.call(null,vec__8079__8082,5,null);
var s__8089 = cljs.core.nth.call(null,vec__8079__8082,6,null);
var ms__8090 = cljs.core.nth.call(null,vec__8079__8082,7,null);
var vec__8080__8091 = cljs.core.nth.call(null,vec__8078__8081,1,null);
var offset_sign__8092 = cljs.core.nth.call(null,vec__8080__8091,0,null);
var offset_hours__8093 = cljs.core.nth.call(null,vec__8080__8091,1,null);
var offset_minutes__8094 = cljs.core.nth.call(null,vec__8080__8091,2,null);
var offset__8095 = (offset_sign__8092 * ((offset_hours__8093 * 60) + offset_minutes__8094));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__8066))?1970:y__8084),((cljs.core.not.call(null,months__8067))?1:check__8058.call(null,1,mo__8085,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__8068))?1:check__8058.call(null,1,d__8086,cljs.reader.days_in_month.call(null,mo__8085,cljs.reader.leap_year_QMARK_.call(null,y__8084)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__8069))?0:check__8058.call(null,0,h__8087,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__8070))?0:check__8058.call(null,0,m__8088,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__8071))?0:check__8058.call(null,0,s__8089,((cljs.core._EQ_.call(null,m__8088,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__8072))?0:check__8058.call(null,0,ms__8090,999,"timestamp millisecond field must be in range 0..999")),offset__8095], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____8107 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____8107))
{var vec__8108__8109 = temp__3971__auto____8107;
var years__8110 = cljs.core.nth.call(null,vec__8108__8109,0,null);
var months__8111 = cljs.core.nth.call(null,vec__8108__8109,1,null);
var days__8112 = cljs.core.nth.call(null,vec__8108__8109,2,null);
var hours__8113 = cljs.core.nth.call(null,vec__8108__8109,3,null);
var minutes__8114 = cljs.core.nth.call(null,vec__8108__8109,4,null);
var seconds__8115 = cljs.core.nth.call(null,vec__8108__8109,5,null);
var ms__8116 = cljs.core.nth.call(null,vec__8108__8109,6,null);
var offset__8117 = cljs.core.nth.call(null,vec__8108__8109,7,null);
return (new Date((Date.UTC(years__8110,(months__8111 - 1),days__8112,hours__8113,minutes__8114,seconds__8115,ms__8116) - ((offset__8117 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__8121 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____8122 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__8121),null);
if(cljs.core.truth_(temp__3971__auto____8122))
{var pfn__8123 = temp__3971__auto____8122;
return pfn__8123.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__8121)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__8126 = cljs.core.name.call(null,tag);
var old_parser__8127 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__8126,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__8126,f);
return old_parser__8127;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__8130 = cljs.core.name.call(null,tag);
var old_parser__8131 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__8130,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__8130);
return old_parser__8131;
});
