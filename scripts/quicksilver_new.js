//Quicksilver Score
//
// A port of the Quicksilver string ranking algorithm
// Reimplemented as pure as is possible with JS that is now procedural
// Also it's been optimized.
//
// Tested in Firefox 56 && Chrome 67
//
// The Quicksilver code is available here

// The MIT License
//
// Copyright (c) 2008 Lachie Cox
// Copyright (c) 2019 Macarthur Inbody
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
"use strict";

function score(haystack,needle,offset) {
  offset = offset || 0 ; // TODO: I think this is unused... remove;;
  var j=0;
  var needle_len=needle.length;
  var haystack_len=haystack.length;
  var sub_needle='';
  var index=0;
  var next_string='';
  var next_needle=0;
  var remaining_score=0;
  var running_score=0;
  var c=0;
  var i=0;
  if(needle_len == 0) return 0.9;
  if(needle_len > haystack_len) return 0.0;

  for (i = needle_len; i > 0; i--) {
    sub_needle = needle.substring(0,i);
    index = haystack.indexOf(sub_needle);


    if(index < 0) continue;
    if(index + needle_len > haystack_len + offset) continue;

    next_string = haystack.substring(index+sub_needle.length);
    next_needle = null;

    if(i >= needle_len){
      next_needle = '';
    }
    else{
      next_needle = needle.substring(i);
    }
  //reached here
    remaining_score = score(next_string,next_needle,offset+index);

    if (remaining_score > 0) {
      running_score = haystack_len-next_string.length;

      if(index != 0) {
        j = 0;

        c = haystack.charCodeAt(index-1);
        if(c==32 || c == 9) {
          for(j=(index-2); j >= 0; j--) {
            c = haystack.charCodeAt(j);
            running_score -= ((c == 32 || c == 9) ? 1 : 0.15);
          }

          // XXX maybe not port this heuristic
          //
          //          } else if ([[NSCharacterSet uppercaseLetterCharacterSet] characterIsMember:[self characterAtIndex:matchedRange.location]]) {
          //            for (j = matchedRange.location-1; j >= (int) searchRange.location; j--) {
          //              if ([[NSCharacterSet uppercaseLetterCharacterSet] characterIsMember:[self characterAtIndex:j]])
          //                score--;
          //              else
          //                score -= 0.15;
          //            }
        } else {
          running_score -= index;
        }
      }

      running_score += remaining_score * next_string.length;
      running_score /= haystack_len;
      return running_score;
    }
  }
  return 0.0;
}